import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para mostrar el mensaje de error en la interfaz de usuario
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de registro de errores
    console.error("Error capturado:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes mostrar una interfaz de usuario alternativa en caso de error
      return <h1>¡Oops! Algo salió mal.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
