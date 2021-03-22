

def find_uniq(array)
array.map { |e| if array.count(e) == 1; e end}
end

puts find_uniq([1, 1, 1, 2, 1, 1])