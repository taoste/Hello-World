import jieba.analyse
path = 'C:/Users/LP/Desktop/weibo.txt'
fp = open(path,'r',encoding='utf-8')
content = fp.read()
try:
    jieba.analyse.set_stop_words('H:\最近用（笔记本）\python\中文停用词表.txt')
    tags = jieba.analyse.extract_tags(content, topK=100, withWeight=True)
    for item in tags:
        print(item[0]+'\t'+str(int(item[1]*1000)))
finally:
    fp.close()