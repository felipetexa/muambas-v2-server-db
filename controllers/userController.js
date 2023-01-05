const {Usuario} = require("../models")
const bcrypt = require('bcrypt');
const { Pedido } = require('../models');
const { response } = require("express");


const UserController = {
    
  showLogin: (req, res) => {
    return res.render('home/login');
  },
  
  /*   mostraLogin: (req, res) => {
      res.render('home/login');
    }, */

  showCadastrar: (req, res) => {
      res.render('home/cadastro');
    },

  store: async (req, res) => {
      const { nome, email, senha, confirmaSenha, cpf, cep } = req.body;
      const hash = bcrypt.hashSync(senha, 10);
      const verificaSeCadastrado = await Usuario.findOne({where:{email}});

      if (verificaSeCadastrado) {
        return res.render('home/cadastro', { error: 'Usuário já cadastrado' });
      }

      if (senha != confirmaSenha) {
        return res.render('home/cadastro', { error: 'Senhas não conferem.' });
      }

      const usuario = {
        nome,
        email,
        senha: hash,
        cpf,
        cep
      }

         await Usuario.create(usuario);

        return res.redirect('/login');
    },

    login: async (req, res) => {
      const { email, senha } = req.body;
      const usuario = await Usuario.findOne({where: {email}});

      if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
        return res.render("home/login", { error: "Email ou senha estão incorretos ou não existem." });
      }

      req.session.usuario = usuario;
      return res.redirect("/");
    },

    logout: (req, res) => {
      req.session.destroy();

      return res.redirect('/');
    },
    panelUser: async (req, res) => { 
      const { usuario, carrinho } = req.session;
      const pedidos = await Pedido.findAll({where: {usuario_id: usuario.id}, include: 'produtos'});
      return res.render('usuario/painelUsuario', { usuario, pedidos: pedidos, carrinho });
  },
  orderDetail: async (req, res) => {
    const { usuario } = req.session;
    const { id } = req.params;
    const pedido = await Pedido.findOne({where: { id, usuario_id: usuario.id}, include: 'produtos'});
    return res.render('usuario/detalhesPedido', { usuario, pedido: pedido });
  },
  
  esqueciMinhaSenha: (req, res) => {
      res.render('usuario/esqueciMinhaSenha')
    }

  }

module.exports = UserController;