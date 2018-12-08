import requests
import json

headers = {
    'Cookie':'_T_WM=96cb9ea775b44e6b748bad0632f08acf; ALF=1495261239; SCF=Ao2eEoFhjA5KbdNGqJHI9wEAM9KNrdONmtRBf3Azk4hY6cCXAOtoHK9p0qyo0s52_K7c7o2uOMLHjyOZxQyCfGY.; SUB=_2A251_CMeDeRhGeNM41oV-S_MzDSIHXVXH01WrDV6PUJbktANLVTfkW0YD5snD7uLxDFvKP-bEw7LXp6MdA..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WWYIHB5wH.nYVf7IYKTS.SD5JpX5o2p5NHD95QfeonRSh.pehMRWs4DqcjrK.yhi--Xi-zRi-isi--Ni-2ci-iFi--fiKLsiKy8i--ci-2Ei-2c; SUHB=0h1JEFS6Kw-9oj; SSOLoginState=1492669262; H5_INDEX=0_friend; H5_INDEX_TITLE=%E5%A5%BD%E5%8F%8B%E5%9C%88%20; M_WEIBOCN_PARAMS=luicode%3D20000174%26uicode%3D20000174',
    'User_Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
}

f = open('C:/Users/LP/Desktop/weibo.txt','a+',encoding='utf-8')

def get_info(url,page):
    html = requests.get(url,headers=headers)
    json_data = json.loads(html.text)
    card_groups = json_data[0]['card_group']
    for card_group in card_groups:
        f.write(card_group['mblog']['text'].split(' ')[0]+'\n')

    next_cursor = json_data[0]['next_cursor']

    if page<50:
        next_url = 'https://m.weibo.cn/index/friends?format=cards&next_cursor='+str(next_cursor)+'&page=1'
        page = page + 1
        get_info(next_url,page)
    else:
        pass
        f.close()

if __name__ == '__main__':
    url = 'https://m.weibo.cn/index/friends?format=cards'
    get_info(url,1)
