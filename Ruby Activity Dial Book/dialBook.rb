dial_book = {
    "newyork" => "212",
    "newbrunswick" => "732",
    "edison" => "908",
    "plainsboro" => "609",
    "sanfrancisco" => "301",
    "miami" => "305",
    "paloalto" => "650",
    "evanston" => "847",
    "orlando" => "407",
    "lancaster" => "717"
  }
  
  def get_city_names(somehash)
    return somehash.keys
  end
  
  def get_area_code(somehash, key)
    return somehash[key]
  end
  
  loop do
    puts "Do you want to find an area code based on a city name?(Y/N)"
    answer = gets.chomp.downcase
        if answer == "yes" || answer == "y"
            keys = get_city_names(dial_book)
            puts "Which city do you want the area code for?"
            puts ""
            puts keys
            print "Enter your selection : "
            city = gets.chomp
                if dial_book.include?(city)
                area_code = get_area_code(dial_book, city)
                puts "The area code for #{city} is #{area_code}"
                else
                puts "This city is not in our dial book"
                end
            else
            puts "Loop terminated..."
            break
        end
  end