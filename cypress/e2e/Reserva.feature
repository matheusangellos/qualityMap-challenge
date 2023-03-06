Feature: Reserva

    Como usuário, desejo efetuar uma reserva com sucesso
    Em um hotel 5 estrelas em Dubai, para 3 adultos, 2 criança de 3 anos com nacionalidade italiana
    Fazendo o pagamento da reserva utilizando a opção Pay Later

Scenario: Reserva com sucesso
    Given que sou um usuário do tipo "Customer" já cadastrado e estou logado na plataforma
    When  clico no menu "Hotels"
    And efetuo uma pesquisa de acordo com os critérios desejados
    Then ao selecionar a opção "Pay Later" e finalizar a reserva a mesma deve ser realizada com sucesso
    And deve constar no menu "My Bookings"