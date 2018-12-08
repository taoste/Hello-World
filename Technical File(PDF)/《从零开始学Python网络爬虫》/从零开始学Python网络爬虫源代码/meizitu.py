import requests
from bs4 import BeautifulSoup
from urllib.request import urlretrieve
dowmload_links = []
path = 'C://Users/LP/Desktop/photo/'
url = 'http://www.mzitu.com/'
res = requests.get(url)
soup = BeautifulSoup(res.text,'lxml')
imgs = soup.select('li > a > img')
for img in imgs:
    print(img.get('data-original'))
    dowmload_links.append(img.get('data-original'))
for item in dowmload_links:
    urlretrieve(item,path+item[-10:])