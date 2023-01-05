const {Produto} = require("../models");
const {Op} = require("sequelize");
const homeController = {
    
    showIndex: async (req, res) => {
        let { usuario, carrinho } = req.session;
        const {search} = req.body;
        console.log(search);
        if (search && search.length > 0) {
            const produtos = await Produto.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${search}%`
                    }
                }
            });
            return res.render('home/index', { produtos, usuario, carrinho });
        }
        const produtos = await Produto.findAll({
        where: {
            ativo:{
                [Op.eq]: "on"
            }
        },    
        limit: 4,
        offset: 3, 
        });

        if (usuario) {
            if (carrinho > 0) {
                return res.render('home/index', { produtos, usuario, carrinho });
            }
            return res.render('home/index', { produtos, usuario, carrinho });
        }
        return res.render('home/index', { produtos, usuario, carrinho });
    },

    showOneProduct: async (req, res) => {
        let { usuario, carrinho } = req.session;
        const { id } = req.params;

        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.render("home/not-found", { error: "Produto não encontrado 😬" });
        }
        if (usuario) {
            if (carrinho > 0) {
                return res.render('home/produtos', { produto, usuario, carrinho });
            }
            return res.render('home/produtos', { produto, usuario, carrinho });
        }
        return res.render("home/produtos", { produto, usuario });

    },

    categorias: async (req, res) => {
        const { usuario } = req.session;
        const {carrinho} = req.session;
        const id = req.params.id;
        const categorias = await Produto.findAll({
            where: {
                categorias_id:{
                    [Op.eq]: id
                }
            }
    });
        res.render('home/categorias', { usuario, carrinho, categorias });
    },

    login: (req, res) => {
        res.render('home/login')
    },

    produtos: (req, res) => {
        const { usuario } = req.session;

        res.render('home/produtos', { usuario });
    },

    cadastro: (req, res) => {
        res.render('home/cadastro')
    },

    lista: async(req, res) => {
        let { usuario, carrinho } = req.session;
        const {search} = req.body;
        console.log(search);
        if (search && search.length > 0) {
            const produtos = await Produto.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${search}%`
                    }
                }
            });
            return res.render('home/lista', { produtos, usuario, carrinho });
        }
        const produtos = await Produto.findAll();

        if (usuario) {
            if (carrinho > 0) {
                return res.render('home/lista', { produtos, usuario, carrinho });
            }
            return res.render('home/lista', { produtos, usuario, carrinho });
        }
        return res.render('home/lista', { produtos, usuario, carrinho });
    }

}

module.exports = homeController;