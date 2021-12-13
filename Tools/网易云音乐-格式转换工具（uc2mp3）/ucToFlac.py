import os

def getAllFiles():
    #返回当前目录下的所有文件名
    path = os.getcwd()
    return [f for f in os.listdir(path)]

def isUcExtension(file):
    #判断是否是.uc文件
    if len(file) >= 4 and file[-3:] == '.uc':
        return True
    else:
        return False

def ucToFlac(file):
    #将当前文件按字节与0xA3进行异或，并对文件格式进行修改
    fSource = open(file, 'rb')
    fOut = open(file[:-3] + '.flac','wb')
    content = bytearray(fSource.read())
    for index in range(len(content)):
        content[index] ^= 0xA3
    fOut.write(content)
    fSource.close()
    fOut.close()


#函数调用：将当前目录下所有的.uc文件自动解码成.flac文件
files = getAllFiles()
for file in files:
    if isUcExtension(file):
        ucToFlac(file)
        print(file[:-3] + '.flac' + '转换成功')
