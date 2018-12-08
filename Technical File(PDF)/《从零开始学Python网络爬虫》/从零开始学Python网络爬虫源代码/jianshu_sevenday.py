from lxml import etree
import requests
import pymongo
import re
import json
from multiprocessing import Pool

client = pymongo.MongoClient('localhost', 27017)
mydb = client['mydb']
sevenday = mydb['sevenday']

header = {
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
}

def get_url(url):
    html = requests.get(url,headers=header)
    selector = etree.HTML(html.text)
    infos = selector.xpath('//ul[@class="note-list"]/li')
    for info in infos:
        article_url_part = info.xpath('div/a/@href')[0]
        get_info(article_url_part)

def get_info(url):
    article_url = 'http://www.jianshu.com/' + url
    html = requests.get(article_url,headers=header)
    selector = etree.HTML(html.text)
    author = selector.xpath('//span[@class="name"]/a/text()')[0]
    article = selector.xpath('//h1[@class="title"]/text()')[0]
    date = selector.xpath('//span[@class="publish-time"]/text()')[0]
    word = selector.xpath('//span[@class="wordage"]/text()')[0]
    view = re.findall('"views_count":(.*?),',html.text,re.S)[0]
    comment = re.findall('"comments_count":(.*?),',html.text,re.S)[0]
    like = re.findall('"likes_count":(.*?),',html.text,re.S)[0]
    id = re.findall('{"id":(.*?),',html.text,re.S)[0]
    gain_url = 'http://www.jianshu.com/notes/{}/rewards?count=20'.format(id)
    wb_data = requests.get(gain_url,headers=header)
    json_data = json.loads(wb_data.text)
    gain = json_data['rewards_count']

    include_list = []
    include_urls = ['http://www.jianshu.com/notes/{}/included_collections?page={}'.format(id,str(i)) for i in range(1,10)]
    for include_url in include_urls:
        html = requests.get(include_url,headers=header)
        json_data = json.loads(html.text)
        includes = json_data['collections']
        if len(includes) == 0:
            pass
        else:
            for include in includes:
                include_title = include['title']
                include_list.append(include_title)
    info ={
        'author':author,
        'article':article,
        'date':date,
        'word':word,
        'view':view,
        'comment':comment,
        'like':like,
        'gain':gain,
        'include':include_list
    }
    sevenday.insert_one(info)

if __name__ == '__main__':
    urls = ['http://www.jianshu.com/trending/weekly?page={}'.format(str(i)) for i in range(0, 11)]
    pool = Pool(processes=4)
    pool.map(get_url,urls)
