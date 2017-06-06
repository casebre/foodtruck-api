import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';

export default({config, db}) => {
    let api = Router();

    // v1/foodtruck/add
    api.post('/add', (req, res) => {
        let foodTruck = new FoodTruck();
        foodTruck.name = req.body.name;
        foodTruck.foodTye = req.body.foodType;
        foodTruck.averageCost = req.body.averageCost;
        foodTruck.geometry = req.body.geometry;

        foodTruck.save(err => {
            if(err) {
                res.send(err);
            }

            res.json({ message: "Food truck saved successfully" });
        });
    });

    api.get('/all', (req, res) => {
        // .find({}) -> no filters
        FoodTruck.find({}, (err, foodTrucks) => {
            if(err) {
                res.send(err);
            } else {
                res.json(foodTrucks);
            }
        });
    });

    api.get('/:id', (req, res) => {
        // .find({}) -> no filters
        FoodTruck.findById(req.params.id, (err, foodTruck) => {
            if(err) {
                res.send(err);
            } else {
                res.json(foodTruck);
            }
        });
    });

    api.put('/:id', (req, res) => {
        // .find({}) -> no filters
        FoodTruck.findById(req.params.id, (err, foodTruck) => {
            if(err) {
                res.send(err);
            } else {
                foodTruck.name = req.body.name;

                foodTruck.save(err => {
                    if(err) {
                        res.send(err);
                    } else {
                        res.json({message: "Food truck updated successfully!"});
                    }
                });
            }
        });
    });

    api.delete('/:id', function (req, res) {
        FoodTruck.findById(req.params.id, (err, foodTruck) => {
            if(err) {
                console.log(err);
                res.json({ message: "Food truck ID couldn't be found. "});
            } else {
                FoodTruck.remove({
                    _id: req.params.id
                }, (err, foodTruck) => {
                    if(err) {
                        console.log(err);
                        res.json({ message: "ID couldn't be deleted. "});
                    } else {
                        res.json({ message: "Deleted successfully!"});
                    }
                });
            }
        });
    });

    return api;
}
