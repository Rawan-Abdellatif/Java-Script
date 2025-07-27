def sum_odd_elements(lst):
    total = 0
    for num in lst:
        if num % 2 != 0:
            total += num
    return total

numbers = [3, 2, 4, 6, 5, 7, 8, 0, 1]

print(sum_odd_elements(numbers))  


def sum_odd_element(lst):
    total = 0
    i = 0
    while i < len(lst):
        if lst[i] % 2 != 0:
            total += lst[i]
        i += 1
    return total
numbers = [3, 2, 4, 6, 5, 7, 8, 0, 1]
print(sum_odd_element(numbers)) 