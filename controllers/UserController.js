const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
    static async register(req, res, next) {
        try {
            // console.log(req.body);
            let user = await User.create(req.body);
            // console.log(user);

            res.status(201).json({
                message: "account has been created",
                username: user.username,
                email: user.email,
            });
            // res.status(201).json({ message: ` has been created` });
        } catch (error) {
            next(error);
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
    static async getAllUsers(req, res, next) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
