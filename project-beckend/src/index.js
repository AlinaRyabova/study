import { program } from "commander";

import {
  getMovies,
  getMoviesById,
  addMovie,
  updateMovieById,
  deleteMovieById,
} from "./movies.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "getAll":
      const allMovies = await getMovies();
      return console.log(allMovies);
    case "getById":
      const oneMovie = await getMoviesById(id);
      return oneMovie
        ? console.log(oneMovie)
        : console.log(`Movie with id ${id} not found`);
    case "add":
      const newMovie = await addMovie(data);
      return console.log(newMovie);
    case "updateById":
      const updateMovie = await updateMovieById(id, data);
      return console.log(updateMovie);
    case "deleteById":
      const deleteMovie = await deleteMovieById(id);
      return deleteMovie
        ? console.log(deleteMovie)
        : console.log(`Movie with id ${id} not found`);
    default:
      console.error("Unknown action type!");
  }
};

program
  .option("-a,  --action <type>")
  .option("-i,  --id <type>")
  .option("-t,  --title <type>")
  .option("-d,  --director <type>");

program.parse();

const options = program.opts();
invokeAction(options);
