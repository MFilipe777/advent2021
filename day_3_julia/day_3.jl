sample = "00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010"

function flip(bin)
    s = ""
    for i in bin
        if i == '1'
            s = s * "0"
        else
            s = s * "1"
        end
    end
    return s
end

function sol1(sample)
    bit = ""
    for i in 1:sizeof(sample[1])
        most = ""
        
        for j in 1:size(sample)[1]
            most = most * sample[j][i]
        end

        if count(i->(i=='0'), most) >= size(sample)[1]/2
            bit = bit * "0"
        else
            bit = bit * "1"
        end
    end
    
    return parse(Int, bit, base=2) * parse(Int, flip(bit), base=2)
end

println("Part 1: ", sol1(split(sample, "\n")))
