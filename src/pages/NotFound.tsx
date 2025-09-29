import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center bg-gradient-subtle min-h-[60vh]">
        <div className="container text-center py-20">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-8xl font-bold text-primary">404</div>
            <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
            <p className="text-xl text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
