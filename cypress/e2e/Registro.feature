Feature: Registro

    Como usuário, desejo me registrar com sucesso ao nopCommerce
    Para que possa efetuar compras

Scenario: Registro com sucesso
    Given que eu acesso o site
    When clico no botão "Register"
    And informo todos os dados necessários
    Then a data selecionada deve corresponder ao input desejado e finalizo o registro
    And devo ter sucesso no meu registro

Scenario: Registro com erro
    Given que eu acesso o site
    When clico no botão "Register"
    Then cada campo obrigatório deve conter uma mensagem informando seu requisito