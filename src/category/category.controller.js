'use strict';

import Category from './category.model.js';

export const saveC = async (req, res) => {
    try {
        let data = req.body;
        let category = new Category(data);
        await category.save();
        return res.send({ message: 'Category saved successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error saving category' });
    }
};

export const getC = async (req, res) => {
    try {
        let categories = await Category.find();
        return res.send({ categories });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error getting categories' });
    }
};

export const updateC = async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let updatedCategory = await Category.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!updatedCategory) return res.status(404).send({ message: 'Category not found and not updated' });
        return res.send({ message: 'Category updated successfully', updatedCategory });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating category' });
    }
};

export const deleteC = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedCategory = await Category.deleteOne({ _id: id });
        if (deletedCategory.deletedCount === 0) return res.status(404).send({ message: 'Category not found and not deleted' });
        return res.send({ message: 'Deleted category successfully' });
    } catch (err) {
        console.error(err);
        return res.status(404).send({ message: 'Error deleting category' });
    }
};
