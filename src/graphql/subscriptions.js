/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onCreateRecipe(filter: $filter) {
      id
      name
      ingredients {
        items {
          id
          name
          quantity
          recipeId
          createdAt
          updatedAt
          recipeIngredientsId
        }
        nextToken
      }
      instructions {
        items {
          id
          info
          recipeId
          createdAt
          updatedAt
          recipeInstructionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onUpdateRecipe(filter: $filter) {
      id
      name
      ingredients {
        items {
          id
          name
          quantity
          recipeId
          createdAt
          updatedAt
          recipeIngredientsId
        }
        nextToken
      }
      instructions {
        items {
          id
          info
          recipeId
          createdAt
          updatedAt
          recipeInstructionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onDeleteRecipe(filter: $filter) {
      id
      name
      ingredients {
        items {
          id
          name
          quantity
          recipeId
          createdAt
          updatedAt
          recipeIngredientsId
        }
        nextToken
      }
      instructions {
        items {
          id
          info
          recipeId
          createdAt
          updatedAt
          recipeInstructionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onCreateIngredient(filter: $filter) {
      id
      name
      quantity
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeIngredientsId
    }
  }
`;
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onUpdateIngredient(filter: $filter) {
      id
      name
      quantity
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeIngredientsId
    }
  }
`;
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onDeleteIngredient(filter: $filter) {
      id
      name
      quantity
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeIngredientsId
    }
  }
`;
export const onCreateInstruction = /* GraphQL */ `
  subscription OnCreateInstruction(
    $filter: ModelSubscriptionInstructionFilterInput
  ) {
    onCreateInstruction(filter: $filter) {
      id
      info
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeInstructionsId
    }
  }
`;
export const onUpdateInstruction = /* GraphQL */ `
  subscription OnUpdateInstruction(
    $filter: ModelSubscriptionInstructionFilterInput
  ) {
    onUpdateInstruction(filter: $filter) {
      id
      info
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeInstructionsId
    }
  }
`;
export const onDeleteInstruction = /* GraphQL */ `
  subscription OnDeleteInstruction(
    $filter: ModelSubscriptionInstructionFilterInput
  ) {
    onDeleteInstruction(filter: $filter) {
      id
      info
      recipeId
      recipe {
        id
        name
        ingredients {
          nextToken
        }
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      recipeInstructionsId
    }
  }
`;
