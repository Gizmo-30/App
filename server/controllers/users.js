const {Collections, User} = require("../models")
exports.changeStatus = async (req,res) => {
    const action = req.query.action
    const checked = req.body

    if(action !== 'delete') {
        const condition = action === 'block' || action === 'active' ? {status: action}: {role: action}
        try {
            const response = await Promise.all(
                checked.map(async (e) => {
                    const [update] = await User.update(condition, {where: {username: e}}
                    )
                    return [update]
                })
            )
            if (response.every((update) => update > 0)) {
                return res.status(200).send('status updated');
            } else {
                return res.status(500).send('failed to update status for some users');
            }
        } catch (e) {
            console.error(e)
            res.status(500).send('internal server error')
        }
    } else {
        try {
            const response = await Promise.all(
                checked.map(async (e) => {
                    const [update] = await User.destroy({where: {username: e}}
                    )
                    return [update]
                })
            )
            if (response.every((deletedRows) => deletedRows > 0)) {
                return res.status(200).send('users deleted');
            } else {
                return res.status(500).send('failed to delete some users');
            }
        } catch (e) {
            console.error(e)
            res.status(500).send('internal server error')
        }
    }
}
