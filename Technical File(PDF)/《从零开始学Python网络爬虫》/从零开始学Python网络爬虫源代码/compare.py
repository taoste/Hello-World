import requests
import re
from bs4 import BeautifulSoup
from lxml import etree
import time

headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'
}

urls = ['http://www.qiushibaike.com/text/page/{}/'.format(str(i)) for i in range(1,36)]

def re_scraper(url):
    res = requests.get(url,headers=headers)
    ids = re.findall('<h2>(.*?)</h2>',res.text,re.S)
    contents = re.findall('<div class="content">.*?<span>(.*?)</span>',res.text,re.S)
    laughs = re.findall('<span class="stats-vote"><i class="number">(\d+)</i>',res.text,re.S)
    comments = re.findall('<i class="number">(\d+)</i> 评论',res.text,re.S)
    for id,content,laugh,comment in zip(ids,contents,laughs,comments):
        info = {
            'id':id,
            'content':content,
            'laugh':laugh,
            'comment':comment
        }
        return info

def bs_scraper(url):
    res = requests.get(url, headers=headers)
    soup = BeautifulSoup(res.text,'lxml')
    ids = soup.select('a > h2')
    contents = soup.select('div > span')
    laughs = soup.select('span.stats-vote > i')
    comments = soup.select('i.number')
    for id,content,laugh,comment in zip(ids,contents,laughs,comments):
        info = {
            'id':id.get_text(),
            'content':content.get_text(),
            'laugh':laugh.get_text(),
            'comment':comment.get_text()
        }
        return info

def lxml_scraper(url):
    res = requests.get(url, headers=headers)
    selector = etree.HTML(res.text)
    url_infos = selector.xpath('//div[@class="article block untagged mb15"]')
    try:
        for url_info in url_infos:
            id = url_info.xpath('div[1]/a[2]/h2/text()')[0]
            content = url_info.xpath('a[1]/div/span/text()')[0]
            laugh = url_info.xpath('div[2]/span[1]/i/text()')[0]
            comment = url_info.xpath('div[2]/span[2]/a/i/text()')[0]
            info = {
                'id':id,
                'content':content,
                'laugh':laugh,
                'comment':comment
            }
            return info
    except IndexError:
        pass

if __name__ == '__main__':
    for name,scraper in [('Regular expressions',re_scraper),('BeautifulSoup',bs_scraper),('Lxml',lxml_scraper)]:
        start = time.time()
        for url in urls:
            scraper(url)
        end = time.time()
        print(name,end-start)

