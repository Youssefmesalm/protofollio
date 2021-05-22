const common = {
  API_URL: "http://127.0.0.1:8000/graphql",
};

const devConfig = {
  ...common,
}

const prodConfig = {
  ...common,
}

export default (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;