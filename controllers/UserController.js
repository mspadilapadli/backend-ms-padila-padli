const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
    static async register(req, res, next) {
        try {
            // console.log(req.body);
            let user = await User.create(req.body);
            // console.log(user);

            res.status(201).json(user);
            // res.status(201).json({ message: ` has been created` });
        } catch (error) {
            console.log(error.name);
            next(error);
            // if (error.name === `SequelizeValidationError`) {
            //     return res
            //         .status(400)
            //         .json({ message: error.errors.map((e) => e.message) });
            // }
            // // console.log(error);
            // res.status(500).json({ message: `Internal Server Error` });
            // res.status(500).json(error);
        }
    }

    static async login(req, res, next) {
        try {
            let { email, password } = req.body;
            if (!email || !password) throw { name: `InvalidInput` };

            const user = await User.findOne({
                where: { email },
            });
            if (!user) throw { name: `InvalidUser` };
            // console.log(user);
            const comparePass = comparePassword(password, user.password);
            if (!comparePass) throw { name: `InvalidUser` };
            // console.log(comparePass);

            let token = createToken({ id: user.id });

            res.status(200).json({
                // message: `Login berhasil`,
                access_token: token,
            });
        } catch (error) {
            console.log(error.name);
            next(error);
        }
    }
}

module.exports = UserController;