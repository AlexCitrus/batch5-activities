a = [2, 1, 3, 5, 3, 1]
b = [3, 1, 2, 1, 3, 2]

def first_duplicate(a)
    counter = []
    a.each do |value|
        if counter[value]
            return value
        end
        counter[value] = true
    end
    -1
end

puts first_duplicate(a) # Output: 3
puts first_duplicate(b) # Output: 1