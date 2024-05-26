import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score
from sklearn.preprocessing import LabelEncoder, StandardScaler

#define constants
MAX_ITER = 750


# Load the filtered dataset
df = pd.read_csv('dhds-cancer-age.csv', low_memory=False)

# Split the dataset into training and testing sets
X = df.drop('Response', axis=1)  # features
y = df['Response']  # target variable

# Convert all columns to strings because encoder can only work with one type per column
X = X.astype(str)

# encode all labels using label encoder
le = LabelEncoder()
X = X.apply(le.fit_transform)
y = le.fit_transform(y)


# scale the features to improve accuracy of the model
scaler = StandardScaler()
X = scaler.fit_transform(X)

# split into training sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=40)

# Train a logistic regression model on the training data
model = LogisticRegression(random_state=40, max_iter=MAX_ITER)
model.fit(X_train, y_train)

# Evaluate the model's performance on the testing data
y_pred = model.predict(X_test)
print('Accuracy:', accuracy_score(y_test, y_pred))
print('Classification Report:')
print(classification_report(y_test, y_pred))
print('ROC-AUC Score:', roc_auc_score(y_test, y_pred))