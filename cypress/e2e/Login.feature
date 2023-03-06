Feature: Login

    Como usuário, desejo me logar com sucesso ao PHPTravels
    Tanto quanto Customer como Agent

Scenario: Login com sucesso Customer
    Given que eu acesso o site do PHPTravels
    When clico no menu "Account" e em "Customer Login"
    And informo as credenciais corretas de "Customer" e clico no botão Login
    Then devo me logar com sucesso e ser direcionado para a área de Dashboard

Scenario: Login com sucesso Agent
    Given que eu acesso o site do PHPTravels
    When clico no menu "Account" e em "Agents Login"
    And informo as credenciais corretas de "Agent" e clico no botão Login
    Then devo me logar com sucesso e ser direcionado para a área de Dashboard