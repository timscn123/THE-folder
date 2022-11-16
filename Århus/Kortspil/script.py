kort = [51, 4, 37, 21, 47, 19, 49, 28, 3, 16, 35]

def f(x):
    i = 0
    while i < len(kort):
        if kort[i] == x:
            print("wee")
            return
        else:
            print("aww")  
            i = i + 1

def g(x):
    left = 0
    right = len(kort)
    while left <= right:
        midt = abs((left + right) / 2)
        if midt < x:
            left = midt + 1
            return
        elif midt > x:
            right = midt - 1
            return
        elif midt == x:
            print(midt)
        


f(37)


print("")

g(37)

#kort.sort()
#f(37)

