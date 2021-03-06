s = "abacabad"

def first_not_repeating_character(string)
    string.each_char do |char|
        return char if string.downcase.count(char.downcase) < 2
      end
      return "_"
  end

 puts first_not_repeating_character("abacabad")
 puts first_not_repeating_character("abababa")

 