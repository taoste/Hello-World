import requests
from lxml import etree
import time
import pymongo

client = pymongo.MongoClient('localhost', 27017)
mydb = client['mydb']
tongcheng_url = mydb['tongcheng_url']
tongcheng_info = mydb['tongcheng_info']

headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
    'Connection':'keep-alive'
}

def get_links(channel,pages):
    list_view = '{}pn{}/'.format(channel,str(pages))
    try:
        html = requests.get(list_view,headers=headers)
        time.sleep(2)
        selector = etree.HTML(html.text)
        if selector.xpath('//tr'):
            infos = selector.xpath('//tr')
            for info in infos:
                if info.xpath('td[2]/a/@href'):
                    url = info.xpath('td[2]/a/@href')[0]
                    tongcheng_url.insert_one({'url':url})
                else:
                    pass
        else:
            pass
    except requests.exceptions.ConnectionError:
        pass

def get_info(url):
    html = requests.get(url,headers=headers)
    selector = etree.HTML(html.text)
    try:
        title = selector.xpath('//h1/text()')[0]
        if selector.xpath('//span[@class="price_now"]/i/text()'):
            price = selector.xpath('//span[@class="price_now"]/i/text()')[0]
        else:
            price = "无"
        if selector.xpath('//div[@class="palce_li"]/span/i/text()'):
            area = selector.xpath('//div[@class="palce_li"]/span/i/text()')[0]
        else:
            area = "无"
        view = selector.xpath('//p/span[1]/text()')[0]
        if selector.xpath('//p/span[2]/text()'):
            want = selector.xpath('//p/span[2]/text()')[0]
        else:
            want = "无"
        info = {
            'tittle':title,
            'price':price,
            'area':area,
            'view':view,
            'want':want,
            'url':url
        }
        tongcheng_info.insert_one(info)
    except IndexError:
        pass