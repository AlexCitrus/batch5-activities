

def disemvowel(string)
    vowels = "aeiouAEIOU"
    return (string.chars - vowels.chars).join
end


puts disemvowel("This website is for losers LOL!")