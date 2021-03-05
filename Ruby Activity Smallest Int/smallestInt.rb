def smallest_int(arr)
    smallest = arr[0]

    arr.each do |num|
        if num < smallest
            smallest = num
        end
    end

#    puts smallest
   puts "The smallest integer is: #{smallest}"
end

smallest_int([-1, 30, 40, 20, -4])