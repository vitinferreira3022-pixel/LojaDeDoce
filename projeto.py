dificuldade = 9
if(dificuldade != 0):
    print("\nQual a dificuldade que você deseja:\n1 - Fácil\n2 - Médio\n3 - Dificil")
    dificuldade = int(input("\nQual dificuldade você escolhe: "))
    if(dificuldade == 1):
        campo1 = []
        campo2 = []
        for linha in range(0, 4):
            lista = []
            for coluna in range(0,4):
                lista.append(0)
            campo1.append(lista)
        for linha2 in range(0, 4):
            nova = []
            for coluna in range(0,4):
                nova.append(0)
            campo2.append(nova)
        def verificar_vitoria(campo):
            for linha in campo:
                if 1 in linha:
                    return False
            return True
        def resetar(campo):
            for i in range(4):
                for j in range(4):
                    campo[i][j] = 0
        resposta = 9
        while(resposta != 0):
            print("\n1 - Cadastrar o Navio\n2 - Atacar\n3 - Visualizar o Campo\n0 - Sair")
            resposta = int(input("\nDigite sua opção: "))
            if(resposta == 1):
                player = int(input("\nQual jogador eu sou (1 ou 2): "))
                linha = int(input("\nDigite a linha: "))
                coluna = int(input("\nDigite a coluna: "))
                direcao = input("\nDigite a direção (H/V): ")
                if(player == 1):
                    if(direcao == 'H'):
                        if(coluna < 3):
                            campo1[linha][coluna] = 1
                            campo1[linha][coluna+1] = 1
                        else:
                            print("O navio sai do tabuleiro!")
                        if(direcao == 'V'):
                            if(linha < 3):
                                campo1[linha][coluna] = 1
                                campo1[linha+1][coluna] = 1
                            else:
                                print("O navio sai do tabuleiro!")
                if(player == 2):
                    if(direcao == 'V'):
                        if(coluna < 3):
                            campo2[linha][coluna] = 1
                            campo2[linha][coluna+1] = 1
                        else:
                            print("O navio sai do tabuleiro!")
                        if(direcao == 'H'):
                            if(linha < 3):
                                campo2[linha][coluna] = 1
                                campo2[linha+1][coluna] = 1
                            else:
                                print("O navio sai do tabuleiro!")
            elif(resposta == 2):
                player = int(input("\nQual jogador eu sou (1 ou 2): "))
                linha = int(input("\nDigite a linha: "))
                coluna = int(input("\nDigite a coluna: "))
                if(player == 1):
                    if(campo2[linha][coluna] == 1):
                        print("\nAcertou!")
                        campo2[linha][coluna] = 0
                        if verificar_vitoria(campo2):
                            print("\nJogador 1 venceu!")
                            reset = int(input("\n1 - Jogar Novamente\n0 - Sair: "))
                            if (reset == 1):
                                resetar(campo1)
                                resetar(campo2)
                            else:
                                break  
                    else:
                        print("\nErrou!")
                else:
                    if(campo1[linha][coluna] == 1):
                        print("\nAcertou!")
                        campo1[linha][coluna] = 0
                    else:
                        print("\nErrou!")
            elif(resposta == 3):
                player = int(input("\nQual jogador eu sou (1 ou 2): "))
                if(player == 1):
                    for linha in range(0,4):
                        print(campo1[linha])
                else:
                    for linha in range(0,4):
                        print(campo2[linha])
dificuldade = 9
if(dificuldade != 0):
    print("\nQual a dificuldade que você deseja:\n1 - Fácil\n2 - Médio\n3 - Dificil")
    dificuldade = int(input("\nQual dificuldade você escolhe: "))
    if(dificuldade == 2):
        campo1 = []
        campo2 = []
        for linha in range(0, 4):
            lista = []
            for coluna in range(0,4):
                lista.append(0)
            campo1.append(lista)
        for linha2 in range(0, 4):
            nova = []
            for coluna in range(0,4):
                nova.append(0)
            campo2.append(nova)
        def verificar_vitoria(campo):
            for linha in campo:
                if 1 in linha:
                    return False
            return True
        def resetar(campo):
            for i in range(4):
                for j in range(4):
                    campo[i][j] = 0
        resposta = 9
        while(resposta != 0):
            print("\n1 - Cadastrar o Navio\n2 - Atacar\n3 - Visualizar o Campo\n0 - Sair")
            resposta = int(input("\nDigite sua opção: "))
            if(resposta == 1):
                player = int(input("\nQual jogador eu sou (1 ou 2): "))
                linha = int(input("\nDigite a linha: "))
                coluna = int(input("\nDigite a coluna: "))
                direcao = input("\nDigite a direção (H/V): ")
                if(player == 1):
                    if(direcao == 'H'):
                        if(coluna < 3):
                            campo1[linha][coluna] = 1
                            campo1[linha][coluna+1] = 1
                        else:
                            print("O navio sai do tabuleiro!")
                        if(direcao == 'V'):
                            if(linha < 3):
                                campo1[linha][coluna] = 1
                                campo1[linha+1][coluna] = 1
                            else:
                                print("O navio sai do tabuleiro!")
                if(player == 2):
                    if(direcao == 'V'):
                        if(coluna < 3):
                            campo2[linha][coluna] = 1
                            campo2[linha][coluna+1] = 1
                        else:
                            print("O navio sai do tabuleiro!")
                        if(direcao == 'H'):
                            if(linha < 3):
                                campo2[linha][coluna] = 1
                                campo2[linha+1][coluna] = 1
                            else:
                                print("O navio sai do tabuleiro!")
            elif(resposta == 2):
                player = int(input("\nQual jogador eu sou (1 ou 2): "))
                linha = int(input("\nDigite a linha: "))
                coluna = int(input("\nDigite a coluna: "))
                if(player == 1):
                    if(campo2[linha][coluna] == 1):
                        print("\nAcertou!")
                        campo2[linha][coluna] = 0
                        if verificar_vitoria(campo2):
                            print("\nJogador 1 venceu!")
                            reset = int(input("\n1 - Jogar Novamente\n0 - Sair: "))
                            if (reset == 1):
                                resetar(campo1)
                                resetar(campo2)
                            else:
                                break  
                    else:
                        print("\nErrou!")
                else:
                    if(campo1[linha][coluna] == 1):
                        print("\nAcertou!")
                        campo1[linha][coluna] = 0
                    else:
                        print("\nErrou!")
            elif(resposta == 3):
                player = int(input("\nQual jogador eu sou (1 ou 2): "))
                if(player == 1):
                    for linha in range(0,4):
                        print(campo1[linha])
                else:
                    for linha in range(0,4):
                        print(campo2[linha])