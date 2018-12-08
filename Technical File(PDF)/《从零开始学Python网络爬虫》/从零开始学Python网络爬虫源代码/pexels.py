from bs4 import BeautifulSoup
import requests
import json

headers ={
    'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'
}

url_path = 'https://www.pexels.com/search/'
word= input('请输入你要下载的图片：')
url_tra ='http://howtospeak.org:443/api/e2c?user_key=dfcacb6404295f9ed9e430f67b641a8e &notrans=0&text=' + word
english_data = requests.get(url_tra)
js_data = json.loads(english_data.text)
content = js_data['english']
url = url_path + content + '/'
wb_data = requests.get(url,headers=headers)
soup = BeautifulSoup(wb_data.text,'lxml')
imgs = soup.select('article > a > img')
list = []
for img in imgs:
    photo = img.get('src')
    list.append(photo)

path = 'C://Users/LP/Desktop/photo/'

for item in list:
        data = requests.get(item,headers=headers)
        fp = open(path+item.split('?')[0][-10:],'wb')
        fp.write(data.content)
        fp.close()
        # print(item)

