
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score, confusion_matrix
from sklearn.preprocessing import LabelEncoder, StandardScaler

data = pd.read_csv('dhds-cancer-age.csv', low_memory=False)
if 'Rowid' in data.columns:
    data = data.drop('Rowid', axis=1)

# replace any missing values with mean, loop through each column
# for column in data.columns:
#     mean = data[column].mean()
#     data[column].fillna(mean, inplace=True)


# encode all labels using label encoder
le = LabelEncoder()
data = data.apply(le.fit_transform, )


X = data.drop('Response' , axis=1)
y = data['Response']




X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.45, random_state=490)

model = DecisionTreeClassifier(criterion='entropy', max_depth=3, random_state=490, min_samples_leaf=5)

model.fit(X_train, y_train)

y_pred = model.predict(X_test)

y_test_reset = y_test.reset_index(drop=True)

for i in range(0, 10):
    print(y_pred[i], y_test_reset[i])

print('Accuracy:', accuracy_score(y_test, y_pred))
