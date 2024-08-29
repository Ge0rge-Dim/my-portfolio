import TestOneBefore from "../assets/images/projectOne/test-one-before.png";
import TestOneAfter from "../assets/images/projectOne/test-one-after.png";
import TestTwoBefore from "../assets/images/projectOne/test-two-before.png";
import TestTwoAfter from "../assets/images/projectOne/test-two-after.png";
import TestThreeBefore from "../assets/images/projectOne/test-three-before.png";
import TestThreeAfter from "../assets/images/projectOne/test-three-after.png";

const Testing = () => {
  return (
    <section className="flex flex-col text-lg py-28 font-roboto text-primary-dark bg-primary-light p-5">
      <div className="medium-container">
        <div className="flex flex-row justify-between pb-2">
          <h3 className="text-lg">Testing & Iterations</h3>
          <p className="text-lg">07</p>
        </div>
        <div className="border bg-primary-dark opacity-30 h-1"></div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 pt-8">
          <h2 className="text-4xl items-center font-medium">
            Usability Testing, <br />
            Findings & Iterations
          </h2>
          <p className="text-lg">
            After creating the wireframes, I wanted to ensure the app's design
            was user-friendly and intuitive. To do this, I conducted a usability
            test with <span className="font-medium">6 participants</span>. The
            goal was to evaluate the clarity, ease of use, and comprehension of
            the app's features. Based on their feedback, I made several key
            iterations to improve the overall user experience.
          </p>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 mt-14 gap-20">
          <div className="gap-2">
            <img src={TestOneBefore} alt="" />
            <h3 className="text-xl font-medium text-red-800 pt-5">Before</h3>
            <p>
              On the home screen, users had to manually select both the year and
              month to view expenses, which required multiple clicks.
            </p>
          </div>
          <div className="gap-2">
            <img src={TestOneAfter} alt="" />
            <h3 className="text-xl font-medium text-green-800 pt-5">After</h3>
            <p>
              I replaced this with a single button displaying the current month
              and year (e.g., "August 2024") alongside a calendar icon. Tapping
              the button now opens a calendar for easy selection.
            </p>
          </div>
          <div className="gap-2">
            <img src={TestTwoBefore} alt="" />
            <h3 className="text-xl font-medium text-red-800 pt-5">Before</h3>
            <p>
              The monthly reports screen was cluttered, with separate sections
              for total expenses, payment methods, categories, and filters,
              overwhelming users with too much information at once.
            </p>
          </div>
          <div className="gap-2">
            <img src={TestTwoAfter} alt="" />
            <h3 className="text-xl font-medium text-green-800 pt-5">After</h3>
            <p>
              I streamlined the layout by merging payment methods into the
              monthly expenses section, displaying the total amount first,
              followed by transactions, and then payment methods.
            </p>
          </div>
          <div className="gap-2">
            <img src={TestThreeBefore} alt="" />
            <h3 className="text-xl font-medium text-red-800 pt-5">Before</h3>
            <p>
              When adding a new expense, users had to choose from 7 predefined
              categories, with no option to create a custom category.
            </p>
          </div>
          <div className="gap-2">
            <img src={TestThreeAfter} alt="" />
            <h3 className="text-xl font-medium text-green-800 pt-5">After</h3>
            <p>
              To adress this, simply i added an “Add New” button to allow users
              to create their own categories, providing more flexibility in
              managing expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
