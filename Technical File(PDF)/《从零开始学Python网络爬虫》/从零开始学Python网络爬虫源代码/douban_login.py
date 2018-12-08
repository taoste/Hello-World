import requests
# url = 'https://www.douban.com/accounts/login'
# params = {
#     'source':'index_nav',
#     'form_email':'xxxxx',
#     'form_password':'xxxx'
# }
# html = requests.post(url,params)
# print(html.text)
url = 'https://www.douban.com/'
headers = {
    'Cookie':'xxxxxxxxxxxxxx'
}
html = requests.get(url,headers=headers)
print(html.text)