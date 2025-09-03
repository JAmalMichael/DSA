#'IsUnique with Dsa'
#def isUnique(s: str) -> bool:
 #   return len(set(s)) == len(s)


#print(isUnique('hello')) */

'Without dsa'
def isUniqueNoDsa(s: str) -> bool:
    chars = sorted(s)
    for i in range(1, len(chars)):
        if chars[i] == chars[i - 1]:
            return False
    return True
print(isUniqueNoDsa('hate'))