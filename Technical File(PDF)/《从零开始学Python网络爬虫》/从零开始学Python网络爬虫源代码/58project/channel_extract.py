import requests
from lxml import etree

start_url = 'http://cs.58.com/sale.shtml'
url_host = 'http://cs.58.com'

def get_channel_urls(url):
    html = requests.get(url)
    selector = etree.HTML(html.text)
    infos = selector.xpath('//div[@class="lbsear"]/div/ul/li')

    for info in infos:
        class_urls = info.xpath('ul/li/b/a/@href')
        for class_url in class_urls:
            print(url_host + class_url)

get_channel_urls(start_url)

channel_list = '''
    http://cs.58.com/shouji/
    http://cs.58.com/tongxunyw/
    http://cs.58.com/danche/
    http://cs.58.com/fzixingche/
    http://cs.58.com/diandongche/
    http://cs.58.com/sanlunche/
    http://cs.58.com/peijianzhuangbei/
    http://cs.58.com/diannao/
    http://cs.58.com/bijiben/
    http://cs.58.com/pbdn/
    http://cs.58.com/diannaopeijian/
    http://cs.58.com/zhoubianshebei/
    http://cs.58.com/shuma/
    http://cs.58.com/shumaxiangji/
    http://cs.58.com/mpsanmpsi/
    http://cs.58.com/youxiji/
    http://cs.58.com/jiadian/
    http://cs.58.com/dianshiji/
    http://cs.58.com/ershoukongtiao/
    http://cs.58.com/xiyiji/
    http://cs.58.com/bingxiang/
    http://cs.58.com/binggui/
    http://cs.58.com/chuang/
    http://cs.58.com/ershoujiaju/
    http://cs.58.com/bangongshebei/
    http://cs.58.com/diannaohaocai/
    http://cs.58.com/bangongjiaju/
    http://cs.58.com/ershoushebei/
    http://cs.58.com/yingyou/
    http://cs.58.com/yingeryongpin/
    http://cs.58.com/muyingweiyang/
    http://cs.58.com/muyingtongchuang/
    http://cs.58.com/yunfuyongpin/
    http://cs.58.com/fushi/
    http://cs.58.com/nanzhuang/
    http://cs.58.com/fsxiemao/
    http://cs.58.com/xiangbao/
    http://cs.58.com/meirong/
    http://cs.58.com/yishu/
    http://cs.58.com/shufahuihua/
    http://cs.58.com/zhubaoshipin/
    http://cs.58.com/yuqi/
    http://cs.58.com/tushu/
    http://cs.58.com/tushubook/
    http://cs.58.com/wenti/
    http://cs.58.com/yundongfushi/
    http://cs.58.com/jianshenqixie/
    http://cs.58.com/huju/
    http://cs.58.com/qiulei/
    http://cs.58.com/yueqi/
    http://cs.58.com/chengren/
    http://cs.58.com/nvyongpin/
    http://cs.58.com/qinglvqingqu/
    http://cs.58.com/qingquneiyi/
    http://cs.58.com/chengren/
    http://cs.58.com/xiaoyuan/
    http://cs.58.com/ershouqiugou/
    http://cs.58.com/tiaozao/
'''