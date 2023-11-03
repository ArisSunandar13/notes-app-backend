const InvarianError = require('../../exceptions/InvarianError')
const CollaborationsPayloadSchema = require('./schema')

const CollaborationsValidator = {
    validateCollaborationPayload: (payload) => {
        const validationResult = CollaborationsPayloadSchema.validate(payload)
        if (validationResult.error) throw new InvarianError(validationResult.error.message)
    },
}

module.exports = CollaborationsValidator
