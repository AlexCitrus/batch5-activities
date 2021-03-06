a = [2, 1, 3, 5, 3, 1]
b = [3, 1, 2, 1, 3, 2]
c = [2, 4, 3, 5, 1]

def first_duplicate(a)
    counts = []
    a.each do |value|
        if counts[value]
            return value
        end
        counts[value] = true
    end
    return -1
end

puts first_duplicate(a) # Output: 3
puts first_duplicate(b) # Output: 1
puts first_duplicate(c) # Output: -1