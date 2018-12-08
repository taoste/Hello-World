import jieba.analyse
path = 'C:/Users/LP/Desktop/doupo.txt'
fp = open(path,'r')
content = fp.read()
try:
    jieba.analyse.set_stop_words('H:\最近用（笔记本）\python\中文停用词表.txt')
    tags = jieba.analyse.extract_tags(content, topK=50, withWeight=True)
    for item in tags:
        print(item[0]+'\t'+str(int(item[1]*1000)))
finally:
    fp.close()