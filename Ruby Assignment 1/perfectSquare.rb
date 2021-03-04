def sqrt(num)
    low = 1
    high = num
    while high > low + 1
       mid = (high + low)/2
       if mid ** 2 <= num
          low = mid
       else
          high = mid
       end
    end
    
    return low
    
  end
  
  def is_perfect_square(x)
  
    if x == 0 
      puts "#{x} => #{true}"
      return true
    end
  
      result = false
      square = sqrt(x)
      result = x  == square * square
      puts "#{x} => #{result}"
      return result
      
    end
  
    is_perfect_square(-1)
    is_perfect_square(0)
    is_perfect_square(3)
    is_perfect_square(4)
    is_perfect_square(25)
    is_perfect_square(26)