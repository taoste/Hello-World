import requests
import json
import time
import pymongo

client = pymongo.MongoClient('localhost', 27017)
mydb = client['mydb']
lagou = mydb['lagou']

headers = {
    'Cookie':'LGUID=20170318090857-76585811-0b77-11e7-94fa-5254005c3644; user_trace_token=20170318090856-17f9ec1cafce47be9f9d2448700ed0fd; index_location_city=%E5%85%A8%E5%9B%BD; PRE_UTM=m_cf_cpt_baidu_pc; PRE_HOST=bzclk.baidu.com; PRE_SITE=http%3A%2F%2Fbzclk.baidu.com%2Fadrc.php%3Ft%3D06KL00c00fATEwT0VZ9m0FNkUsaFl8Fm000000fS_W300000Txxy_Y.THL0oUhY1x60UWdBmy-bIfK15yw-rynvuWRknj0srj0kmWn0IHYLrHn4rDD4rHc1njnvwDRswR7DPH7jrH-Kwj6LnYNKwfK95gTqFhdWpyfqnWbzP1DsPWn3nBusThqbpyfqnHm0uHdCIZwsT1CEQLILIz4_myIEIi4WUvYEUZ0EpZwVUaqWUvdVUv38pZwVUjqdIAdxTvqdThP-5ydxmvuxmLKYgvF9pywdgLKW0APzm1Y1Pjb4Pf%26tpl%3Dtpl_10085_14394_1%26l%3D1051868676%26attach%3Dlocation%253D%2526linkName%253D%2525E6%2525A0%252587%2525E9%2525A2%252598%2526linkText%253D%2525E3%252580%252590%2525E6%25258B%252589%2525E5%25258B%2525BE%2525E7%2525BD%252591%2525E3%252580%252591%2525E5%2525AE%252598%2525E7%2525BD%252591-%2525E4%2525B8%252593%2525E6%2525B3%2525A8%2525E4%2525BA%252592%2525E8%252581%252594%2525E7%2525BD%252591%2525E8%252581%25258C%2525E4%2525B8%25259A%2525E6%25259C%2525BA%2526xp%253Did%28%252522m7daa8b69%252522%29%25252FDIV%25255B1%25255D%25252FDIV%25255B1%25255D%25252FDIV%25255B1%25255D%25252FDIV%25255B1%25255D%25252FH2%25255B1%25255D%25252FA%25255B1%25255D%2526linkType%253D%2526checksum%253D147%26ie%3Dutf-8%26f%3D3%26tn%3Dbaidu%26wd%3D%25E6%258B%2589%25E5%258B%25BE%25E7%25BD%2591%26rqlang%3Dcn%26inputT%3D12561%26prefixsug%3Dla%26rsp%3D0; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2Flp%2Fhtml%2Fcommon.html%3Futm_source%3Dm_cf_cpt_baidu_pc; JSESSIONID=CE495F5C1F395D6F4006D80F2A90FC67; TG-TRACK-CODE=search_code; _ga=GA1.2.275771300.1489799334; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1491051633,1491096143,1491266190,1491266200; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1491267140; LGSID=20170404083631-bf5bd389-18ce-11e7-8780-525400f775ce; LGRID=20170404085221-f61cc81b-18d0-11e7-9831-5254005c3644; SEARCH_ID=6a4b1b203e8145d0a8bc130480c2d962',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'Connection':'keep-alive'
}

def get_page(url,params):
    html = requests.post(url, data=params, headers=headers)
    json_data = json.loads(html.text)
    total_Count = json_data['content']['positionResult']['totalCount']
    page_number = int(total_Count/15) if int(total_Count/15)<30 else 30
    get_info(url,page_number)

def get_info(url,page):
    for pn in range(1,page+1):
        params = {
            'first': 'true',
            'pn': str(pn),
            'kd': 'Python'
        }
        try:
            html = requests.post(url,data=params,headers=headers)
            json_data = json.loads(html.text)
            results = json_data['content']['positionResult']['result']
            for result in results:
                infos = {
                    'businessZones':result['businessZones'],
                    'city':result['city'],
                    'companyFullName':result['companyFullName'],
                    'companyLabelList':result['companyLabelList'],
                    'companySize':result['companySize'],
                    'district':result['district'],
                    'education':result['education'],
                    'explain':result['explain'],
                    'financeStage':result['financeStage'],
                    'firstType':result['firstType'],
                    'formatCreateTime':result['formatCreateTime'],
                    'gradeDescription':result['gradeDescription'],
                    'imState':result['imState'],
                    'industryField':result['industryField'],
                    'jobNature':result['jobNature'],
                    'positionAdvantage':result['positionAdvantage'],
                    'salary':result['salary'],
                    'secondType':result['secondType'],
                    'workYear':result['workYear']
                }
                lagou.insert_one(infos)
                time.sleep(2)
        except requests.exceptions.ConnectionError:
            pass

if __name__ == '__main__':
    url = 'https://www.lagou.com/jobs/positionAjax.json'
    params = {
        'first': 'true',
        'pn': '1',
        'kd': 'Python'
    }
    get_page(url,params)