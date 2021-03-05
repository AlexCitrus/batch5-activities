def smallest_int(arr)
    smallest = arr[0]

    arr.each do |num|
        if num < smallest
            smallest = num
        end
    end

   puts smallest
end

smallest_int([-1, 30, 30])