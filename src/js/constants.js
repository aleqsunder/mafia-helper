import Role from "./app/entity/Role"

const defaultCitizen = new Role()
defaultCitizen.name = 'Житель'
defaultCitizen.max = 6

const defaultMafia = new Role()
defaultMafia.name = 'Мафия'
defaultMafia.max = 2

const defaultDon = new Role()
defaultDon.name = 'Дон'
defaultDon.max = 1

const defaultSheriff = new Role()
defaultSheriff.name = 'Шериф'
defaultSheriff.max = 1

export const defaultRoles = [
    defaultCitizen, defaultMafia, defaultDon, defaultSheriff
]