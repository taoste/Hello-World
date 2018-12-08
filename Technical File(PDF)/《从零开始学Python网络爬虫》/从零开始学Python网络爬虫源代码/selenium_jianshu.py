from selenium import webdriver
url = 'http://www.jianshu.com/p/c9bae3e9e252'
def get_info(url):
    include_title =[]
    driver = webdriver.PhantomJS()
    driver.get(url)
    driver.implicitly_wait(20)
    author = driver.find_element_by_xpath('//span[@class="name"]/a').text
    date = driver.find_element_by_xpath('//span[@class="publish-time"]').text
    word = driver.find_element_by_xpath('//span[@class="wordage"]').text
    view = driver.find_element_by_xpath('//span[@class="views-count"]').text
    comment = driver.find_element_by_xpath('//span[@class="comments-count"]').text
    like = driver.find_element_by_xpath('//span[@class="likes-count"]').text
    included_names = driver.find_elements_by_xpath('//div[@class="include-collection"]/a/div')
    for i in included_names:
        include_title.append(i.text)
    print(author,date,word,view,comment,like,include_title)
get_info(url)