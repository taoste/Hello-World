import sys
sys.path.append("..")
from multiprocessing import Pool
from channel_extract import channel_list
from page_spider import get_links
from page_spider import get_info
from page_spider import tongcheng_url
from page_spider import tongcheng_info

# def get_all_links_from(channel):
#     for num in range(1,101):
#         get_links(channel,num)
#
# if __name__ == '__main__':
#     pool = Pool(processes=4)
#     pool.map(get_all_links_from,channel_list.split())

db_urls = [item['url'] for item in tongcheng_url.find()]
db_infos = [item['url'] for item in tongcheng_info.find()]
x = set(db_urls)
y = set(db_infos)
rest_urls = x - y

if __name__ == '__main__':
    pool = Pool(processes=4)
    pool.map(get_info,rest_urls)