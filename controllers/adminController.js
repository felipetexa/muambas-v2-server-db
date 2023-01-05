const { Produto, Categoria } = require('../models');
const storage = require('../middlewares/storage');
const fs = require('fs');


const adminController = {
    getPainelAdmin: async (req, res) => {
        const produtos = await Produto.findAll();

        /*       console.log(produtos); */
        return res.render('adm/paineladmin', { produtos });
    },
    getProduto: async (req, res) => {
        const { id } = req.params
        const produtos = await Produto.findOne({ where: { id } });

        return res.render('adm/detalhes', { produtos: produtos })
    },
    addProduct: async (req, res) => {

        const categorias = await Categoria.findAll();

        return res.render('adm/adicionarProduto', { categorias });
    },
    storeProduct: async (req, res) => {
        const { nome, imagem, preco, desconto, estoque, categoria, ativo, destaques, descricao } = req.body;
        if (req.file) {
            await Produto.create({
                nome,
                preco: parseFloat(preco),
                desconto,
                estoque,
                categorias_id: categoria,
                ativo,
                destaques,
                descricao,
                imagem: req.file.filename


            })
        } else {
            await Produto.create({
                nome,
                preco: parseFloat(preco),
                desconto,
                estoque,
                categorias_id: categoria,
                ativo,
                destaques,
                descricao,
                imagem
            })
        }

        return res.redirect('/adm/paineladmin');

    },

    editProduct: async (req, res) => {
        const { id } = req.params;
        const categorias = await Categoria.findAll();
        const produto = await Produto.findOne({ where: { id } });
        return res.render('adm/editarProduto', { produto, categorias });
    },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        console.log(req.body);
        const { nome, preco, estoque, categoria, ativo, destaques, descricao } = req.body;
        console.log(req.body.ativo)
        if (req.file) {
            await Produto.update({
                nome,
                imagem: req.file.filename,
                preco: parseFloat(preco),
                estoque,
                categoria,
                ativo: ativo ? "on" : "off",
                destaques: destaques == 'on' ? destaques : "off",
                descricao
            }, { where: { id } });

        } else {
            await Produto.update({
                nome,
                preco: parseFloat(preco),
                estoque,
                categoria,
                ativo: ativo ? "on" : "off",
                destaques: destaques == 'on' ? destaques : "off",
                descricao
            }, { where: { id } });

        }
        return res.redirect('/adm/paineladmin');
    },

    deleteProduct: async (req, res) => {
        const { id } = req.params;
        const produtos = await Produto.findOne({ where: { id } });
        return res.render('adm/deletarProduto', { produtos: produtos });
    },

    destroyProduct: async (req, res) => {
        const { id } = req.params;
        await Produto.destroy({ where: { id } });
        try {
            fs.unlinkSync('./public' + produto.imagem)
        } catch (err) {
            console.error(err)
        }
        return res.redirect('/adm/paineladmin');
    }
}

module.exports = adminController;