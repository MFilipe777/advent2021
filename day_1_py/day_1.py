with open("input.txt", "r") as f:
    inp = [int(i) for i in f.readlines()]
    
    # Part 1
    n = sum([inp[i] > inp[i-1] for i in range(1, len(inp))])
    print("Part 1:", n)

    # Part 2
    n2 = sum([inp[i] + inp[i+1] + inp[i+2] < inp[i+1] + inp[i+2] + inp[i+3] for i in range(len(inp) - 3)])
    print("Part 2:", n2) 
