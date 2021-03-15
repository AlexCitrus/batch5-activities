

def disemvowel(string)
    vowels = "aeiou"
    puts (string.chars - vowels.chars).join
end


puts disemvowel("This website is for losers LOL!")