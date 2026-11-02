import mongoose from 'mongoose';

const URI =
    'mongodb+srv://artemadya2005_db_user:<db_password>@cluster0.pkmvmk8.mongodb.net/';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error(e);
    });
