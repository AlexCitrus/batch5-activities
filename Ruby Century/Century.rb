
def century_from_year(year)
      year % 100 == 0 ? year / 100 : (year - (year % 100)) / 100 + 1
end

puts " => #{century_from_year(1705)}"
puts " => #{century_from_year(1900)}"
puts " => #{century_from_year(1601)}"
puts " => #{century_from_year(2000)}"