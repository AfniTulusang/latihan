function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>;
    }
};